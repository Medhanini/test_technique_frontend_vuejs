<template>
  <div>
    <notifications group="foo" />
    <component :is="this.$route.meta.layout || 'div'">
      <router-view/>
    </component>
  </div>
</template>