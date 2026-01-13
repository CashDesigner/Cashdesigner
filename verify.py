from playwright.sync_api import sync_playwright
import os

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        filepath = os.path.abspath('index.html')
        page.goto(f'file://{filepath}')

        # Screenshot Hero
        page.screenshot(path='verification_hero.png')

        # About
        page.locator('#about').scroll_into_view_if_needed()
        page.screenshot(path='verification_about.png')

        # Experience
        page.locator('#experience').scroll_into_view_if_needed()
        page.screenshot(path='verification_experience.png')

        # Projects
        page.locator('#projects').scroll_into_view_if_needed()
        page.screenshot(path='verification_projects.png')

        # Gallery
        page.get_by_text("Lab Gallery").scroll_into_view_if_needed()
        page.screenshot(path='verification_gallery.png')

        # Footer
        page.locator('footer').scroll_into_view_if_needed()
        page.screenshot(path='verification_footer.png')

        browser.close()

if __name__ == '__main__':
    run()
