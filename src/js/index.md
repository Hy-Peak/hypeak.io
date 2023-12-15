---
hello: world
---

<script setup>
import { ref } from 'vue';
import HyName from '../../src/components/HyName.vue';
const count = ref(0)
</script>

## Markdown Content

The count is: {{ count }}
<HyName />
<a-input placeholder="Basic usage" />
<button :class="$style.button" @click="count++">Increment</button>

<style module>
.button {
  color: #c97368;
  font-weight: bold;
}
</style>
