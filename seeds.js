const mongoose = require('mongoose');
const { Symptom, Disease } = require('./models/symptoms');
const axios = require('axios');
const { response } = require('express');

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/ilaaj');
    console.log('Database connected');
}

//main().catch(err => console.log(err));

const seed = async () => {
    try{
        const res = await axios.get('https://healthservice.priaid.ch/symptoms', {
            params: {
                token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InNhcnRoYWsyOXNoYXJtYUBnbWFpbC5jb20iLCJyb2xlIjoiVXNlciIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3NpZCI6IjkwMTMiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3ZlcnNpb24iOiIxMDkiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL2xpbWl0IjoiMTAwIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9tZW1iZXJzaGlwIjoiQmFzaWMiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL2xhbmd1YWdlIjoiZW4tZ2IiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL2V4cGlyYXRpb24iOiIyMDk5LTEyLTMxIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9tZW1iZXJzaGlwc3RhcnQiOiIyMDIzLTAxLTEyIiwiaXNzIjoiaHR0cHM6Ly9hdXRoc2VydmljZS5wcmlhaWQuY2giLCJhdWQiOiJodHRwczovL2hlYWx0aHNlcnZpY2UucHJpYWlkLmNoIiwiZXhwIjoxNjczNjAwODY2LCJuYmYiOjE2NzM1OTM2NjZ9.ec-iM_V47-CmiP34iCiaA-k-X2L-c4bUs3ga0JkojLk',
                language: 'en-gb',
                format: 'json'
            }
        });
        for(let data of res.data){
            const symptom = new Symptom({
                ID: data.ID,
                Name: data.Name
            })
        }
    }catch(err){
        console.log(err);
    }

}

seed();