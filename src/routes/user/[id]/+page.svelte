<script>
    import {page} from "$app/stores"


    console.log($page.params.id)
</script>
<a href="/">ana sayfa</a>

<h1>merhaba {$page.params.id}</h1>