import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const capacitorBuildGradlePath = join(
  __dirname,
  'node_modules',
  '@capacitor',
  'android',
  'capacitor',
  'build.gradle'
);

// Read the file
let content = readFileSync(capacitorBuildGradlePath, 'utf8');

// Add Java version configuration if not present
if (!content.includes('sourceCompatibility')) {
  const insertAfter = "apply plugin: 'com.android.library'\n";
  const javaConfig = 
    'android {\n' +
    '    compileOptions {\n' +
    '        sourceCompatibility JavaVersion.VERSION_17\n' +
    '        targetCompatibility JavaVersion.VERSION_17\n' +
    '    }\n';
  
  // Insert the Java configuration after the apply plugin line
  content = content.replace(
    insertAfter,
    insertAfter + javaConfig
  );
  
  // Write the updated content back to the file
  writeFileSync(capacitorBuildGradlePath, content, 'utf8');
  console.log('Updated Capacitor Android build.gradle with Java 17 compatibility');
} else {
  console.log('Capacitor Android build.gradle already has Java version configuration');
}
