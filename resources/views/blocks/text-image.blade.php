<section class="text-image-block">
    <div class="md:px-4 lg:p-0 lg:max-w-temp-container lg:mx-auto">
        <div class="flex flex-col justify-between {{ $imageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse' }} lg:items-center gap-12 md:gap-8 relative pt-9 pb-12 md:pt-16 md:pb-8">
            @if ($id)
                <div class="relative flex-shrink-0 lg:w-1/2 pr-2 md:pr-0 md:pl-4 md:pb-4">
                    <div class="relative pb-3/5 z-20">
                        <x-image class="absolute w-full h-full object-cover z-20" :image="$id" :alt="$alt" />
                        <div class=" absolute bottom-0 -right-2 md:-bottom-4 {{ $imageLeft ? 'md:-left-4' : 'md:-right-4' }} bg-detail-gray md:bg-primary w-36 h-24 md:w-60 md:h-40 z-10"></div>
                    </div>
                </div>
            @endif
            <div class="max-lg:container max-md:px-4 lg:w-1/2 relative z-50 text-white flex flex-col items-start md:items-center justify-center lg:justify-start lg:items-start gap-3 lg:gap-4">
                <x-section-header containerClasses="text-start md:text-center lg:text-start lg:w-auto" 
                    eyebrowClasses="max-md:leading-none text-primary-dark max-md:uppercase" 
                    headingClasses="text-text max-md:text-3xxl max-md:font-medium max-md:leading-tight tracking-tight md:tracking-wider max-md:uppercase" 
                    textClasses="max-lg:leading-tight text-primary-dark lg:leading-7" 
                    :showEyebrow="$showEyebrow" :eyebrow="$eyebrow" :showHeading="$showHeading" 
                    :heading="$heading" :showText="$showText" :text="$text" />
                @if ($buttonText)
                    <x-button :text="$buttonText" :href="$buttonHref" showArrow="{{ $buttonShowArrow ?? false }}"/>
                @endif
            </div>
        </div>
    </div>
</section>