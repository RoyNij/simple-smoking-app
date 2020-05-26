import { readable, writable, derived } from 'svelte/store';
import jsonsettings from './data/settings.json';
import health from './data/achievements.json';
import money from './data/money.json';

export const quitDate = writable( new Date(jsonsettings.quit_datetime) );
export const pricePerCig = writable( jsonsettings.price_per_pack/jsonsettings.n_per_pack );
export const cigsPerDay = writable( jsonsettings.daily_dosis );
export const currency = writable(jsonsettings.currency);
export const healthObjectives = writable( health );
export const moneyObjectives = writable( money );


const today = readable( null, set => {
    set(new Date());

    const interval = setInterval(() => {
        set(new Date());
    },1000)

    return () => clearInterval(interval)
})

export const quitTime = derived( 
    [quitDate, today],
    ([$quitDate, $today]) => ( $today - $quitDate ) / 1000 / 3600
)

export const cigsNotSmoked = derived(
    [quitTime, cigsPerDay],
    ([$quitTime, $cigsPerDay]) => $quitTime/24 * $cigsPerDay
)

export const moneySaved = derived(
    [cigsNotSmoked, pricePerCig],
    ([$cigsNotSmoked, $pricePerCig]) => $cigsNotSmoked * $pricePerCig
)
