#[macro_use]
extern crate cfg_if;

extern crate wasm_bindgen;
extern crate web_sys;
extern crate pulldown_cmark;
use wasm_bindgen::prelude::*;
use pulldown_cmark::{html, Options, Parser};

cfg_if! {
    // When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
    // allocator.
    if #[cfg(feature = "wee_alloc")] {
        extern crate wee_alloc;
        #[global_allocator]
        static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;
    }
}

// Called by our JS entry point to run the example
#[wasm_bindgen]
pub fn render(markdown: &str) -> String {
    let options = Options::empty();
    let parser = Parser::new_ext(markdown, options);

    // Write to String buffer.
    let mut html = String::new();
    html::push_html(&mut html, parser);

    html
}
