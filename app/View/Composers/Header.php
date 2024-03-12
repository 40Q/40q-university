<?php

namespace App\View\Composers;

use Roots\Acorn\View\Composer;

class Header extends Composer
{
    /**
     * List of views served by this composer.
     *
     * @var array
     */
    protected static $views = [
        'sections.header',
    ];

    /**
     * Data to be passed to view before rendering, but after merging.
     *
     * @return array
     */
    public function override()
    {
        return [
            'universityEmail' => $this->getUniversityEmail(),
            'universityAddress' => $this->getUniversityAddress(),
            'universityLogo' => $this->getUniversityLogo(),
            'socialMedia' => $this->getSocialMedia(),
            'cta' => $this->getCta(),
        ];
    }

    public function getSocialMedia()
    {
        $socialMedia = get_field('social_media', 'option');
        return $socialMedia;
    }

    public function getUniversityEmail()
    {
        $universityEmail = get_field('university_email', 'option');
        return $universityEmail;
    }

    public function getUniversityAddress()
    {
        $universityAddress = get_field('university_address', 'option');
        return $universityAddress;
    }

    public function getUniversityLogo()
    {
        $universityLogo = get_field('university_logo', 'option');
        return $universityLogo;
    }

    public function getCta()
    {
        $headerCta = get_field('header_cta', 'option');
        return $headerCta;
    }
}
