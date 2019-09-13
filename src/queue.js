import 'dotenv/config';
import Queue from './lib/Queue';
/**
 * This queue is outside the project
 * because the process should run in background and can execute
 * outside our server instance
 *  Server -> instance A
 *  Queue -> instance B
 *
 */
Queue.processQueue();
