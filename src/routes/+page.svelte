<script>


    import {enhance} from "$app/forms"
    import {page} from "$app/stores"
    import Page from "./iletisim/+page.svelte";
</script>
<svelte:head>
    <title>
        {$page.data.title}
    </title>
</svelte:head>

<form 
    use:enhance= {
        ({ form, data, action, cancel, submitter })=>{
            return async ({update, result})=>{
                console.log(await result.data)
                update({reset:true})
            }
        }
    }

    method="post" action="?/login">
    <input name="id"/>
    <input name="password"/>
    <button type="submit">gönder</button>
</form>
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
