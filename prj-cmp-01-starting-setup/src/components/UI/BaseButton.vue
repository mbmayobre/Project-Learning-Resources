<template>
<!-- this component creates a template for buttons -->
<!-- the :class binding represents CSS classes that change the look of the button -->
<!-- for example, you could create a button with class="flat" from the selectors in the style tab below -->
    <button :type="type" :class="mode">
        <!-- in this case, the slot could be used for dynamic labels or icons of the button -->
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: ['type', 'mode']
}
</script>

<style scoped>
button {
  padding: 0.75rem 1.5rem;
  font-family: inherit;
  background-color: #3a0061;
  border: 1px solid #3a0061;
  color: white;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #270041;
  border-color: #270041;
}

.flat {
  background-color: transparent;
  color: #3a0061;
  border: none;
}

.flat:hover,
.flat:active {
  background-color: #edd2ff;
}
</style>