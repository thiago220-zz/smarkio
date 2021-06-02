const models = require('../models');
const Comments = models.Comments;

const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
const { IamAuthenticator } = require('ibm-watson/auth');
const fs = require('fs');

const textToSpeech = new TextToSpeechV1({
    authenticator: new IamAuthenticator({
        apikey: 'yzVdBu_DdrV_AvseaT-B3Yfhu8eTbKBQe8pMhIqI50ph',
    }),
    serviceUrl: 'https://api.us-south.text-to-speech.watson.cloud.ibm.com',
});

var synthesizeParams = {
    accept: 'audio/wav',
    voice: 'pt-BR_IsabelaV3Voice'
};

exports.getAudio = async (req, res, next) => {
    synthesizeParams.text = req.body.text;
    await textToSpeech.synthesize(synthesizeParams).then(response => {
        return textToSpeech.repairWavHeaderStream(response.result);
    })
        .then(buffer => {
            fs.writeFileSync('public/audios/'+req.body.id+'.wav', buffer);
            res.status(200).json({audio:req.body.id+'.wav'});
        })
        .catch(err => {
            console.log('error:', err);
        });
};

exports.allComments = async function (req, res) {
    res.json(await Comments.findAll());
};

exports.addComment = async function (req, res) {
    const resultadoCreate = await Comments.create({
        text: req.body.commentInput,
        createdAt: Date.now(),
        updatedAt: Date.now(),
    });
    res.status(200).json({ message: "Mensagem inserida com sucesso", text: resultadoCreate.text, id: resultadoCreate.id  });
};