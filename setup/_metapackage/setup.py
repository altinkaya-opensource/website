import setuptools

with open('VERSION.txt', 'r') as f:
    version = f.read().strip()

setuptools.setup(
    name="odoo-addons-oca-website",
    description="Meta package for oca-website Odoo addons",
    version=version,
    install_requires=[
        'odoo-addon-website_analytics_matomo>=16.0dev,<16.1dev',
        'odoo-addon-website_cookiebot>=16.0dev,<16.1dev',
        'odoo-addon-website_cookiefirst>=16.0dev,<16.1dev',
        'odoo-addon-website_crm_privacy_policy>=16.0dev,<16.1dev',
        'odoo-addon-website_crm_quick_answer>=16.0dev,<16.1dev',
        'odoo-addon-website_form_require_legal>=16.0dev,<16.1dev',
        'odoo-addon-website_forum_subscription>=16.0dev,<16.1dev',
        'odoo-addon-website_google_tag_manager>=16.0dev,<16.1dev',
        'odoo-addon-website_legal_page>=16.0dev,<16.1dev',
        'odoo-addon-website_menu_by_user_status>=16.0dev,<16.1dev',
        'odoo-addon-website_odoo_debranding>=16.0dev,<16.1dev',
        'odoo-addon-website_recaptcha_v2>=16.0dev,<16.1dev',
        'odoo-addon-website_require_login>=16.0dev,<16.1dev',
        'odoo-addon-website_snippet_country_dropdown>=16.0dev,<16.1dev',
        'odoo-addon-website_whatsapp>=16.0dev,<16.1dev',
    ],
    classifiers=[
        'Programming Language :: Python',
        'Framework :: Odoo',
        'Framework :: Odoo :: 16.0',
    ]
)
