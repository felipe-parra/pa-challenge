<template>
  <div class="task-input">
    <!--
      Mission One: Add a task input

      Create a task input according to the design in the README.md file.

      Definition of done:
      [✅] User can type into the input
      [✅] A button with the text "Add" is visible
      [ ] User can click the button to submit the input
       
      Your submission will be judged out of ten points based
      on the following criteria:
      
      Design fidelity - 5 points total
        - Is the spacing correct? (e.g. padding, margin) - 2 points
        - Is there good interaction feedback? (e.g. hover, focus, active states) - 3 points
      Code quality - 5 points
        - Are concerns clearly separeted? (e.g. clear responsibilities for functions, etc.) - 3 point
        - Is the code easy to read and understand? - 2 points
    -->
    <input v-model="newTask" type="text" placeholder="Add a new task" />
    <button @click="onSaveTask">Add</button>
  </div>
</template>

<script setup lang="ts">
/**
 * Component design is up to you. You'll define the props,
 * events, and methods for the component here.
 * 
 * Good luck!
 */
const newTask = defineModel("")
const { saveTask } = defineProps(["saveTask"])

const onSaveTask = () => {
  // Check if the input is empty
  if(newTask.value === undefined || newTask.value === "") {  
    return
  }
  
  saveTask(newTask.value)
  newTask.value = ""
}

</script>
<style scoped lang="scss">
.task-input {
  background-color: #eef2f8;
  border: 1px solid #c8cad0;
  font-size: var(--fs-3);
  font-weight: 500;
  box-shadow: var(--box-shadow-1);
  padding: var(--space-2) var(--space-3);
  border-radius: var(--border-radius-1);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-2) var(--space-3);

  input {
    background-color: inherit;
    border: none;
    color: var(--color-text);
    font-weight: 500;
    outline: none;
    width: 70%;  
  }

  button {
    background-color: white;
    border: 1px solid rgba(200,200,200, .2);
    box-shadow: var(--box-shadow-1);
    cursor: pointer;
    font-weight: 600;
    border-radius: var(--border-radius-1);
    padding: 5px;
    width: 20%;
    transition: all .7s;
    &:hover{
      background-color: var(--color-accent-one);
    }
  }
  
}

</style>