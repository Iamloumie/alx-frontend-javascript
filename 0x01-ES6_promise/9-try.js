/**
 * The function takes a mathFunction as an argument,
 * which is expected to be a function that performs some mathematical operation.
 * It creates an array called queue to store the results or errors.
 * It uses a try-catch-finally block to handle any potential errors,
 * that may occur during the execution of the mathFunction.
 * If the mathFunction executes successfully, its result is pushed into the queue.
 * If an error occurs, an error message is pushed into the queue instead.
 * Finally, regardless of whether an error occurred or not,
 * a message indicating that the guardrail was processed is added to the queue.
 */

export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const result = mathFunction();
    queue.push(result);
  } catch (error) {
    queue.push(`Error: ${error.message}`);
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
