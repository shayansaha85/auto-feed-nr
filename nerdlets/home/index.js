import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.scss'

let sendData = function () {
    const NEW_RELIC_ACCOUNT_ID = '****';
    const NEW_RELIC_INSIGHTS_INSERT_KEY = '****';

    const newRelicUrl = `https://insights-collector.newrelic.com/v1/accounts/${NEW_RELIC_ACCOUNT_ID}/events`;

    const sendToNewRelic = async (data) => {
        try {
            const response = await axios.post(newRelicUrl, data, {
                headers: {
                    'Content-Type': 'application/json',
                    'X-Insert-Key': NEW_RELIC_INSIGHTS_INSERT_KEY,
                },
            });
            console.log('Data sent successfully to New Relic:', response.data);
        } catch (error) {
            console.error('Error sending data to New Relic:', error.message);
        }
    };

    const fetchAndSendData = async () => {
        try {
            const response = await axios.get('https://reqres.in/api/users?page=2');
            const usersData = response.data.data;
            const modifiedData = usersData.map((user) => ({
                ...user,
                eventType: 'ReqRes_Sample',
            }));

            await sendToNewRelic(modifiedData);
        } catch (error) {
            console.error('Error fetching data from ReqRes API:', error.message);
        }
    };

    fetchAndSendData();
};

const App = () => {
    const [isSending, setIsSending] = useState(true);

    useEffect(() => {
        const intervalId = setInterval(() => {
            sendData();
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="message-container">
            {isSending && (
                <>
                    <div className="spinner"></div>
                    <p>Data is being sent every 5 seconds</p>
                </>
            )}
        </div>
    );
};

export default App;
