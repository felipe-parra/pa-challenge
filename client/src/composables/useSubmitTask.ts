import { ref } from 'vue';
import api from '../utils/axios';
import type { Task } from '@/utils/types';

type statusType = 'loading' | 'failed' | 'loaded';

export const useSubmitTask = () => {
  /**
   * Mission two: Insert a task into the database.
   *
   * Write and return a function here which will submit
   * a JSON object to the server to be inserted into the
   * database. Make sure that the response
   * from the server is then placed into the tasks list.
   *
   * Definition of done:
   * [✅] the function sends a post request to the server
   * [✅] the server inserts the task into the database
   * [✅] the newly inserted task is placed into the tasks list
   *
   * Your submission will be judged out of 10 points based on
   * the following criteria:
   *
   * - Works as expected - 5 points
   * - Code quality - 5 points
   *   - Is the code clean and easy to read?
   *   - Are there any obvious bugs?
   *   - Are there any obvious performance issues?
   *   - Are there comments where necessary?
   */
  const state = ref<statusType>('loading');
  /**
   * Submit task to database & return task created
   * @param content string
   * @returns {Promise<Task | null> }
   */
  const submitTask = async (content: string): Promise<Task | null> => {
    try {
      // Send new task
      const { data, status } = await api.post('/mission-two',{ content });
      
      // Catch if failed to submit task
      if(status !== 201){
        throw new Error('Failed to submit task');
      }

      state.value = 'loaded';
      
      // Extract task from data from data coming response
      const createdTask = await data.data

      // Return task
      return createdTask
    } catch (error) {
      state.value = 'failed';
      return null
    }
  };

  return {
    state,

    // Methods
    submitTask
  }
};
