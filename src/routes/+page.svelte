<script lang="ts">
    import Timer from '$lib/components/Timer.svelte'
    import { onMount } from 'svelte'

    let secretKey = ''

    const codeFallback = '--- ---'
    let code = codeFallback
    let time = 0

    onMount(async () => {
        const wasm = await import('$lib/otp/omnisec_otp')
        await wasm.default()

        const otp = wasm

        setInterval(() => {
            if (secretKey) {
                const rawCode = otp.generate_code(secretKey)
                code = `${rawCode.slice(0, 3)} ${rawCode.slice(3)}`
            } else {
                code  = codeFallback
            }

            time = (30 - (Math.round(new Date().getTime() / 1000.0) % 30))
        }, 1000)
    })
</script>

<svelte:head>
    <title>TOTP Generator</title>
</svelte:head>

<div class="h-screen w-screen bg-zinc-900">
    <div class="container max-w-4xl h-full">
        <div class="size-full flex flex-col justify-center gap-8">
            <div>
                <input
                    class="w-full rounded-xl bg-zinc-900 border border-zinc-500 p-4 text-white"
                    placeholder="Secret key"
                    bind:value={secretKey}
                />
            </div>
            <div class="flex gap-8">
                <select
                    class="w-full rounded-xl bg-zinc-900 border border-zinc-500 p-4 text-white"
                    placeholder="Algorithm"
                    disabled
                >
                    <option>HMAC-SHA-1</option>
                </select>
                <select
                    class="w-full rounded-xl bg-zinc-900 border border-zinc-500 p-4 text-white"
                    placeholder="Time"
                    disabled
                >
                    <option selected>30s</option>
                </select>
                <select
                    class="w-full rounded-xl bg-zinc-900 border border-zinc-500 p-4 text-white"
                    placeholder="Length"
                    disabled
                >
                    <option selected>6</option>
                </select>
            </div>
            <div class="border border-zinc-500 rounded-xl w-full p-8 flex">
                <div class="text-white size-full text-3xl md:text-6xl font-bold tracking-widest flex justify-center items-center">
                    <div>{code}</div>
                </div>
                <div class="flex items-center">
                    <Timer timeLeft={time} />
                </div>
            </div>
        </div>
    </div>
</div>