<script>
    document.addEventListener('DOMContentLoaded', (event) => {
        const elements = document.querySelectorAll('.span-40q');

        elements.forEach((el) => {
            if (el.innerHTML.includes('40Q')) {
                el.innerHTML = el.innerHTML.replace(/40Q/g,
                    '<span class="font-bold">40<span class="text-primary">Q</span></span>');
            }
        });
    });
</script>
<section>
    <div class="relative py-32 px-1 md:px-17">
        <div class="container relative flex flex-col justify-center min-w-full">
            <div class="relative z-20 flex h-full flex-col items-center justify-center w-full">
                <x-section-header :showEyebrow="$showEyebrow" :eyebrow="$eyebrow" :showHeading="$showHeading" :heading="$heading" :showText="$showText"
                    :text="$text" containerClasses="text-center lg:px-[20%]" eyebrowClasses="font-mono !text-auxiliar uppercase"
                    headingClasses="uppercase span-40q" textClasses="!tracking-normal" />
                @if ($buttonText)
                    <x-button :href="$buttonHref" :text="$buttonText" class="mt-4" />
                @endif
            </div>
        </div>
        @if ($id)
            <x-image :image="$id" :alt="$alt" class=" absolute top-0 left-0 w-full h-full object-cover" />
            <div class="absolute top-0 left-0 h-full w-full z-10 bg-black opacity-50"></div>
        @endif
    </div>
</section>
