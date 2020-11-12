<template>
<!-- this component is simple that contains no logic -->
<!-- it is a wrapper to other conent which has a certain look -->
    <div>
        <!-- slots can be used as a "placeholder" for dynamic HTML code -->
        <!-- this is used here to give learning-resource component a "card" look -->
        <slot></slot>
    </div>
</template>

<style scoped>
div {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 40rem;
}
</style>