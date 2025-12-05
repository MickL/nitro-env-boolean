import {defineHandler} from "nitro/h3";
import {useRuntimeConfig} from "nitro/runtime-config";

export default defineHandler((event) => {
    const config = useRuntimeConfig();

    return {
        a: config.a,
        b: config.b,
    }
});
