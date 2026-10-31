import { PRODUCTS, PRODUCT_CATEGORIES, STORE_CONFIG, WARRANTY_SPECS, FAQS } from '../src/data/products.js';
import assert from 'assert';

console.log('--- RUNNING DATA INTEGRITY TESTS ---');

// 1. Verify store config
assert.strictEqual(STORE_CONFIG.discordUrl, 'https://discord.gg/DqPe8dnAMP', 'Discord URL must match');
assert.ok(STORE_CONFIG.zaloUrl.includes('0968940842'), 'Zalo URL must contain correct phone');
console.log('✓ STORE_CONFIG verified');

// 2. Verify categories
assert.strictEqual(PRODUCT_CATEGORIES.length, 4, 'Must have 4 categories');
console.log('✓ PRODUCT_CATEGORIES verified');

// 3. Verify products
assert.strictEqual(PRODUCTS.length, 6, 'Must have 6 products');
PRODUCTS.forEach((p, idx) => {
  assert.ok(p.id, `Product ${idx} must have an id`);
  assert.ok(p.title, `Product ${idx} must have a title`);
  assert.ok(p.priceSale, `Product ${idx} must have priceSale`);
  assert.ok(p.features && p.features.length >= 4, `Product ${idx} must have at least 4 features`);
  assert.ok(p.discordQuery, `Product ${idx} must have discordQuery`);
  assert.ok(p.zaloQuery, `Product ${idx} must have zaloQuery`);
  assert.strictEqual(p.stock, 'IN_STOCK', `Product ${idx} must be in stock`);
});
console.log('✓ All 6 PRODUCTS schema and queries verified');

// 4. Verify warranty and FAQs
assert.strictEqual(WARRANTY_SPECS.length, 4, 'Must have 4 warranty specs');
assert.strictEqual(FAQS.length, 5, 'Must have 5 FAQs');
console.log('✓ WARRANTY_SPECS & FAQS verified');

console.log('🎉 ALL DATA INTEGRITY TESTS PASSED!');
