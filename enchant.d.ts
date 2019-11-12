// Type definitions for enchant.js 0.8.6
// Project: https://github.com/wise9/enchant.js
// Definitions by: shioko <https://github.com/ichisadashioko>

declare function enchant(): void;

declare namespace enchant {
    namespace ENV {
        const VERSION: '0.8.3';
        const BROWSER: 'eagle' | 'opera' | 'ie' | 'chrome' | 'safari' | 'firefox' | 'android' | '';
    }
}