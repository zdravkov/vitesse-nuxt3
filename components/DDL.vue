<script setup lang="ts">
import { Button } from '@progress/kendo-vue-buttons';
import { DropDownList } from '@progress/kendo-vue-dropdowns';

const sports = [ 'Basketball', 'Football', 'Tennis', 'Volleyball' ]
</script>
<template>
  <div>
    2222
    <Button >AAaa</Button>
  <DropDownList
            :style="{ width: '230px' }" 
            :data-items='sports'
            :default-item="'Select sport ...'"
        >
        </DropDownList>
  </div>
</template>

