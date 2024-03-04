<section>
    <div class="relative py-20 lg:pt-12 lg:pb-11 px-1 md:px-17">
        <div class="relative z-50 text-white flex flex-col items-center justify-center lg:justify-start lg:items-start gap-3 lg:gap-4">
            <x-section-header containerClasses="sm:w-3/4 text-center lg:text-start lg:w-full" headingClasses="lg:w-1/2 tracking-wider" textClasses="lg:w-1/2 lg:pr-20" :showEyebrow="$showEyebrow" :eyebrow="$eyebrow" :showHeading="$showHeading" :heading="$heading" :showText="$showText"
                :text="$text" />
            @if ($buttonText)
                <x-button :text="$buttonText" :href="$buttonHref" />
            @endif
        </div>
        @if ($id)
            <x-image class="absolute object-cover top-0 left-0 w-full h-full z-10" :image="$id" :alt="$alt" />
            <div class="absolute top-0 left-0 w-full h-full z-20 bg-black opacity-50"></div>
        @endif
    </div>
</section>