<section class="stats-block flex pb-17 pt-4 lg:py-16 justify-center">
    <div class="container">
        <div class="flex flex-col gap-6 sm:grid sm:grid-cols-2 sm:gap-8 xl:grid-cols-4 lg:gap-6">
            @foreach ($stats as $stat)
                <div class="flex gap-4 md:justify-center items-center">
                    <h2 class="text-primary-dark text-5xl sm:text-4xl md:text-5xl font-normal !whitespace-nowrap">{!! $stat['statNumber'] !!}</h2>
                    <p class="text-lg sm:text-base md:text-lg font-bold leading-5 !whitespace-nowrap">{!! $stat['statName'] !!}</p>
                </div>
            @endforeach
        </div>
    </div>
</section>
