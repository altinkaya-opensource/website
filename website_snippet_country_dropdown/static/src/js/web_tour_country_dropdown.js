odoo.define("website_snippet_country_dropdown.tour_demo_page", function (require) {
    "use strict";

    const tour = require("web_tour.tour");

    const country_code_test = "ES";
    const vat_number_test = "B01010101";

    tour.register(
        "website_snippet_country_dropdown_tour_demo_page",
        {
            url: "/website_snippet_country_dropdown.demo_page",
        },
        [
            {
                content: "Click Button",
                trigger: ".js_enabled .js_btn_country_code",
                run: "click",
            },
            {
                content: "Select Country",
                trigger: _.str.sprintf(
                    ".js_enabled [data-country_code=%s]",
                    country_code_test
                ),
                run: "click",
            },
            {
                content: "Insert text",
                trigger: ".js_enabled .js_no_country_field",
                extra_trigger: ".js_enabled .js_btn_country_code[data-country_code=ES]",
                run: "text " + vat_number_test,
            },
            {
                trigger: ".btn[type=submit]",
                run: "click",
            },
            {
                trigger: ".js_enabled .js_btn_country_code[data-country_code=US]",
                run: function () {
                    const checks = {
                        country_code_field: "ES",
                        complete_field: "ESB01010101",
                        no_country_field: "B01010101",
                        disabled_complete_field: "FRA123456789",
                        disabled_country_code_field: "FR",
                        disabled_no_country_field: "A123456789",
                    };
                    const query = new URLSearchParams(location.search);
                    for (const field_name in checks) {
                        const real = query.get(field_name),
                            expected = checks[field_name];
                        if (real !== expected) {
                            console.error(
                                "Tour error: param",
                                field_name,
                                "is",
                                real,
                                "but should be",
                                expected
                            );
                        }
                    }
                },
            },
        ]
    );
});
