<script>
export default {
  name: 'gtag',
  props: {},
  mounted() {
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-9LX6NE1NH7';
    script.async = true;
    document.head.appendChild(script);
  },
};
</script>

<style>
</style>
