// import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
// import { connect } from 'mqtt';
// import { SparkplugClient, Payload } from 'sparkplug-client';
// // import { encodePayload } from 'sparkplug-payload';

// @Injectable()
// export class MqttClientService implements OnModuleInit, OnModuleDestroy {
//   private sparkplugClient: SparkplugClient;
//   private mqttClient;

//   constructor() {
//     this.mqttClient = connect('mqtt://localhost:1883'); // Use your broker URL
//   }

//   async onModuleInit() {
//     this.sparkplugClient = new SparkplugClient({
//       clientId: 'NestJS_Sparkplug_Client',
//       groupId: 'my_group_id', // Your group ID
//       edgeNodeId: 'my_edge_node_id', // Your edge node ID
//       deviceId: 'my_device_id', // Your device ID (if using)
//       version: 'spBv1.0', // Sparkplug version
//     });

//     this.setupListeners();
//   }

//   private setupListeners() {
//     // Subscribe to a Sparkplug topic
//     const sparkplugTopic = this.sparkplugClient.getSubscribeTopic('NDEATH'); // Example topic
//     this.mqttClient.subscribe(sparkplugTopic, (err) => {
//       if (err) {
//         console.error(`Failed to subscribe to ${sparkplugTopic}:`, err);
//       } else {
//         console.log(`Subscribed to ${sparkplugTopic}`);
//       }
//     });

//     // Listen for messages
//     this.mqttClient.on('message', (topic, message) => {
//       if (this.sparkplugClient.isSparkplugTopic(topic)) {
//         const decodedPayload = this.sparkplugClient.decodePayload(message);
//         console.log(`Received Sparkplug message on topic ${topic}:`, decodedPayload);
//       }
//     });
//   }

//   async publishData() {
//     // Create a Sparkplug payload
//     const payload: Payload = {
//       metrics: [
//         {
//           name: 'Temperature',
//           value: 22.5,
//           type: 'float', // Data type
//           timestamp: Date.now(),
//         },
//       ],
//       timestamp: Date.now(),
//     };

//     // Encode payload using sparkplug-payload
//     const encodedPayload = encodePayload(payload);

//     // Publish the data to an MQTT topic
//     const topic = this.sparkplugClient.getPublishTopic('NDATA'); // Example topic
//     this.mqttClient.publish(topic, encodedPayload, { qos: 1 }, (err) => {
//       if (err) {
//         console.error('Failed to publish data:', err);
//       } else {
//         console.log('Published data to topic:', topic);
//       }
//     });
//   }

//   onModuleDestroy() {
//     this.mqttClient.end(); // Disconnect the MQTT client
//   }
// }
