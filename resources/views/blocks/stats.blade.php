<section class="stats-block flex justify-center">
    <div class="container">
        <div class="grid grid-cols-4 gap-6">
            @foreach ($stats as $stat)
                <div class="flex gap-4 items-center">
                    <h2 class="text-primary-dark text-5xl font-normal !whitespace-nowrap">{!! $stat['statNumber'] !!}</h2>
                    <p class="text-lg font-bold leading-5 !whitespace-nowrap">{!! $stat['statName'] !!}</p>
                </div>
            @endforeach
        </div>
    </div>
</section>
