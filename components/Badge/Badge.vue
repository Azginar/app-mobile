<template>
    <div
            class="badge-with-text"
            :class="classes"
    >
        {{label}}
    </div>
</template>
<script>

export default {
  name: 'badge',
  props: {
    label: String,
    type: String,
  },
  computed: {
    classes() {
      const ClassesTypes = new Map()
        .set('success', { success: true })
        .set('danger', { danger: true })
        .set('primary', { primary: true })
        .set('simple', { simple: true });

      return ClassesTypes.get(this.type) ? ClassesTypes.get(this.type) : ClassesTypes.get('primary');
    },
  },
};
</script>

<style scoped>
    .badge-with-text {
        --font-family-sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        box-sizing: border-box;
        display: inline-block;
        padding: .25em .4em;
        font-size: 75%;
        font-weight: 700;
        line-height: 1;
        text-align: center;
        white-space: nowrap;
        vertical-align: baseline;
        border-radius: .25rem;
        transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
        color: #fff;
    }

    .success {
        color: #fff;
        background-color: #28a745;
    }

    .danger {
        color: #fff;
        background-color: #dc3545;
    }

    .primary {
        color: #fff;
        background-color: #007bff;
    }
</style>
