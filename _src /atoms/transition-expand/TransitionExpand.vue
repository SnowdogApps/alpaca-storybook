<script>
export default {
  name: 'TransitionExpand',
  functional: true,
  render (createElement, context) {
    const data = {
      props: {
        name: 'expand'
      },
      on: {
        enter (element) {
          element.style.height = `${element.scrollHeight}px`
        },
        leave (element) {
          element.style.height = `${element.scrollHeight}px`
          setTimeout(() => {
            element.style.height = 0
          })
        }
      }
    }
    return createElement('transition', data, context.children)
  }
}
</script>

<style>
.expand-enter-active,
.expand-leave-active {
  overflow: hidden;
  transition: height 400ms;
}

.expand-enter,
.expand-leave-to {
  height: 0;
}
</style>
