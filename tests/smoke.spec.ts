import { test, expect } from '@playwright/test';

test.describe('Smoke Tests', () => {
  test('homepage loads correctly', async ({ page }) => {
    await page.goto('/');
    
    // Check title
    await expect(page).toHaveTitle(/Dr Adrian Laurence/);
    
    // Check main heading
    await expect(page.locator('h1')).toContainText('Live longer. Feel better. Perform today.');
    
    // Check newsletter CTA
    await expect(page.locator('a[href*="substack"]')).toBeVisible();
    
    // Check navigation
    await expect(page.locator('nav a[href="/about"]')).toBeVisible();
    await expect(page.locator('nav a[href="/services"]')).toBeVisible();
  });

  test('about page loads correctly', async ({ page }) => {
    await page.goto('/about');
    
    // Check title
    await expect(page).toHaveTitle(/About Dr Adrian Laurence/);
    
    // Check main heading
    await expect(page.locator('h1')).toContainText('About Dr Adrian Laurence');
    
    // Check educational notice
    await expect(page.locator('text=Educational content only')).toBeVisible();
  });

  test('blog page loads correctly', async ({ page }) => {
    await page.goto('/blog');
    
    // Check title
    await expect(page).toHaveTitle(/Blog & Articles/);
    
    // Check main heading
    await expect(page.locator('h1')).toContainText('Blog & Articles');
    
    // Check for blog posts
    await expect(page.locator('[class*="PostCard"]')).toHaveCount(3);
  });

  test('blog post loads correctly', async ({ page }) => {
    await page.goto('/blog/sleep-is-the-base-layer');
    
    // Check title
    await expect(page).toHaveTitle(/Sleep Is The Base Layer/);
    
    // Check main heading
    await expect(page.locator('h1')).toContainText('Sleep Is The Base Layer');
    
    // Check content
    await expect(page.locator('text=You\'ve probably heard it a thousand times')).toBeVisible();
  });

  test('services page has educational notice', async ({ page }) => {
    await page.goto('/services');
    
    // Check educational notice
    await expect(page.locator('text=Educational content only')).toBeVisible();
    await expect(page.locator('text=No personalized medical advice')).toBeVisible();
  });

  test('AMA page has educational notice', async ({ page }) => {
    await page.goto('/ama');
    
    // Check educational notice
    await expect(page.locator('text=Educational Content Only')).toBeVisible();
    await expect(page.locator('text=general educational purposes only')).toBeVisible();
  });

  test('footer has educational disclaimer', async ({ page }) => {
    await page.goto('/');
    
    // Check footer disclaimer
    await expect(page.locator('footer text=Educational content only')).toBeVisible();
    await expect(page.locator('footer text=Not a substitute for your own clinician')).toBeVisible();
  });

  test('newsletter links are external', async ({ page }) => {
    await page.goto('/');
    
    // Check newsletter links are external
    const newsletterLinks = page.locator('a[href*="substack"]');
    await expect(newsletterLinks.first()).toHaveAttribute('target', '_blank');
    await expect(newsletterLinks.first()).toHaveAttribute('rel', 'noopener noreferrer');
  });

  test('mobile navigation works', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Check mobile menu button
    await expect(page.locator('.mobile-menu-button')).toBeVisible();
    
    // Click mobile menu button
    await page.click('.mobile-menu-button');
    
    // Check mobile menu is visible
    await expect(page.locator('.mobile-menu')).toBeVisible();
    
    // Check navigation links in mobile menu
    await expect(page.locator('.mobile-menu a[href="/about"]')).toBeVisible();
  });

  test('404 page works', async ({ page }) => {
    await page.goto('/nonexistent-page');
    
    // Check 404 content
    await expect(page.locator('text=404')).toBeVisible();
    await expect(page.locator('text=Page Not Found')).toBeVisible();
    await expect(page.locator('a[href="/"]')).toBeVisible();
  });
});

