<?php

namespace App\View\Components;

use Roots\Acorn\View\Component;

class Image extends Component
{
    public $image;

    public $size;

    public $attr;

    public $container;

    public $containerClass;

    public $placeholder;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(mixed $image = null, string $size = 'large', string|null $class = null, string|null $alt = null, bool $lazy = true, bool $container = false)
    {
        $this->attr = [];

        if ($class) {
            $this->attr['class'] = $class;
        }

        if ($alt) {
            $this->attr['alt'] = $alt;
        }

        $this->attr['loading'] = $lazy ? 'lazy' : false;

        $this->container = $container;

        $this->image = $this->display_image($image, $size, $this->attr);
    }

    /**
     * Display Images
     *
     * @param [type] $image
     * @return void
     */
    public function display_image($image, $image_size, $attr = '', $inline_svg = false)
    {
        $default_attr = [
            'class' => 'img-fluid',
        ];

        // Get alt param
        if (is_numeric($image) && wp_attachment_is_image($image)) {
            $default_attr['alt'] = trim(strip_tags(get_post_meta($image, '_wp_attachment_image_alt', true)));
        }

        // New Attributes (Merge)
        $attr = wp_parse_args($attr, $default_attr);
        $attr = array_map('esc_attr', $attr);

        // parsed attrs for html
        $img_html_tags = '';
        foreach ($attr as $name => $value) {
            $img_html_tags .= " $name=" . '"' . $value . '"';
        }

        // If it's an ID act like WP normally does
        if (is_numeric($image) && wp_attachment_is_image($image)) {
            return wp_get_attachment_image($image, $image_size, 0, $attr);
        }

        // If it's an String
        if (!is_array($image) && !is_object($image) && is_string($image)) {
            // Pending Question: can we try and use wp_get_attachment_image via reverse lookup of the url??
            $image_string = '<img src="' . $image . '" ' . $img_html_tags . '>';
            return $image_string;
        }

        // If it's an array (from ACF Image field)
        if (is_array($image)) {
            // If it's an svg
            if ($image['mime_type'] === 'image/svg+xml') {
                if ($inline_svg == true) {
                    $file_name = get_attached_file($image['ID']);
                    if (file_exists($file_name)) {
                        return file_get_contents($file_name);
                    }
                } else {
                    return wp_get_attachment_image($image['ID'], $image_size, 0, $attr);
                }
            } else {
                return wp_get_attachment_image($image['ID'], $image_size, 0, $attr);
            }
        }

        // If it's an Object (rare)
        if (is_object($image)) {
            return wp_get_attachment_image($image->ID, $image_size, 0, $attr);
        }

        // If Image is empty
        if ($image == null && $this->placeholder) {
            return '<img src="' . $this->placeholder . '" ' . $img_html_tags . '>';
        }

        // Else
        return false;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('components.image');
    }
}
