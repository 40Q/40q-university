<?php

namespace App\View\Components;

use Roots\Acorn\View\Component;

class Button extends Component
{
    /**
     * The button array
     */
    public $href;

    public $type;

    public $text;

    public $showArrow;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct($href = null, $type = null, $text = null, $showArrow = false)
    {
        $this->href = $href;
        $this->type = $type;
        $this->text = $text;
        $this->showArrow = $showArrow;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\View\View|string
     */
    public function render()
    {
        return $this->view('components.button');
    }
}