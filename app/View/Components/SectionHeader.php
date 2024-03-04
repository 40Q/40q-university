<?php

namespace App\View\Components;

use Roots\Acorn\View\Component;

class SectionHeader extends Component
{
    public $showEyebrow;
    public $showHeading;
    public $showText;

    public $eyebrow;
    public $heading;
    public $text;
    public $containerClasses;
    public $eyebrowClasses;
    public $headingClasses;
    public $textClasses;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(
        $showEyebrow = false,
        $showHeading = false,
        $showText = false,
        $eyebrow = '',
        $heading = '',
        $text = '',
        $containerClasses = '',
        $eyebrowClasses = '',
        $headingClasses = '',
        $textClasses = '',
    ) {
        $this->showEyebrow = $showEyebrow;
        $this->showHeading = $showHeading;
        $this->showText = $showText;

        $this->eyebrow = $eyebrow;
        $this->heading = $heading;
        $this->text = $text;
        $this->containerClasses = $containerClasses;
        $this->eyebrowClasses = $eyebrowClasses;
        $this->headingClasses = $headingClasses;
        $this->textClasses = $textClasses;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\View\View|string
     */
    public function render()
    {
        return $this->view('components.section-header');
    }
}
