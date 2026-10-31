import { PRODUCTS, PRODUCT_CATEGORIES, STORE_CONFIG } from '../src/data/products.js';
import { TRANSLATIONS } from '../src/data/translations.js';
import assert from 'assert';

console.log('--- RUNNING ENHANCED DUAL-LANGUAGE DATA TESTS ---');

// 1. Verify store config
assert.strictEqual(STORE_CONFIG.discordUrl, 'https://discord.gg/DqPe8dnAMP', 'Discord URL must match');
assert.ok(STORE_CONFIG.zaloUrl.includes('0968940842'), 'Zalo URL must contain correct phone');
console.log('✓ STORE_CONFIG verified');

// 2. Verify categories
assert.strictEqual(PRODUCT_CATEGORIES.length, 4, 'Must have 4 categories');
PRODUCT_CATEGORIES.forEach((c) => {
  assert.ok(c.nameVi, 'Category must have nameVi');
  assert.ok(c.nameEn, 'Category must have nameEn');
});
console.log('✓ PRODUCT_CATEGORIES verified');

// 3. Verify products
assert.strictEqual(PRODUCTS.length, 6, 'Must have 6 products');
PRODUCTS.forEach((p, idx) => {
  assert.ok(p.id, `Product ${idx} must have an id`);
  assert.ok(p.title.vi && p.title.en, `Product ${idx} must have vi and en title`);
  assert.ok(p.tagline.vi && p.tagline.en, `Product ${idx} must have vi and en tagline`);
  assert.ok(p.priceSale, `Product ${idx} must have priceSale`);
  assert.ok(p.features.vi && p.features.vi.length >= 4, `Product ${idx} must have at least 4 vi features`);
  assert.ok(p.features.en && p.features.en.length >= 4, `Product ${idx} must have at least 4 en features`);
  assert.ok(p.discordQuery, `Product ${idx} must have discordQuery`);
  assert.ok(p.zaloQuery, `Product ${idx} must have zaloQuery`);
  assert.strictEqual(p.stock, 'IN_STOCK', `Product ${idx} must be in stock`);
});
console.log('✓ All 6 PRODUCTS dual-language schema and queries verified');

// 4. Verify Translations dictionary
assert.ok(TRANSLATIONS.vi, 'Vietnamese translations must exist');
assert.ok(TRANSLATIONS.en, 'English translations must exist');
assert.strictEqual(TRANSLATIONS.vi.specs.items.length, 4, 'Must have 4 vi specs');
assert.strictEqual(TRANSLATIONS.en.specs.items.length, 4, 'Must have 4 en specs');
assert.strictEqual(TRANSLATIONS.vi.faq.items.length, 5, 'Must have 5 vi FAQs');
assert.strictEqual(TRANSLATIONS.en.faq.items.length, 5, 'Must have 5 en FAQs');
console.log('✓ TRANSLATIONS (vi & en) verified');

console.log('🎉 ALL DUAL-LANGUAGE DATA TESTS PASSED!');
