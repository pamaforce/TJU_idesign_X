// stores/triggerStore.ts
import {defineStore} from 'pinia';

interface TriggerState {
  triggered: boolean;
}

export const useTriggerStore = defineStore('trigger', {
    state: (): TriggerState => ({
        triggered: false
    }),
    actions: {
        triggerFunction() {
            this.triggered = true;

        },
        resetTrigger() {
            this.triggered = false;
        }
    }
});
