const env = require('../env.js');
const baseURL = env.baseURL;
const options = env.options;
const expect = env.expect;
const request = env.request;
const chai = env.chai;
const chai_schema = env.chaiJSONSchema;
const mediaItemAPI = env.NTApi.media;
chai.use(chai_schema);


describe("Media item API tests:",function() {
    it("returns 200 with item details as body, if the mediaItemID and site are correct", function(done) {
        var siteUnderTest = 10;
        var itemUnderTest = 360052;
        var endPointUnderTest = mediaItemAPI + '/site/' + siteUnderTest + '/item/' + itemUnderTest;
        var itemFoundSchema = 
        {
            "attachments": [],
            "proxies": [
              {
                "id": 996386,
                "audioTracks": [],
                "schemaVersion": "1-0-0",
                "url": "https://test-media.jupiter.bbc.co.uk/zgbwcjvsfsqaw1-00.jupiter/qaw1_webmedia/2019_09_02/360052/360052_1_46890.wmv",
                "videoTracks": []
              },
              {
                "id": 996387,
                "audioTracks": [],
                "schemaVersion": "1-0-0",
                "url": "https://test-media.jupiter.bbc.co.uk/zgbwcjvsfsqaw1-00.jupiter/qaw1_webmedia/2019_09_02/360052/360052_1_46890_LQ.m4v",
                "videoTracks": []
              },
              {
                "id": 996388,
                "audioTracks": [],
                "schemaVersion": "1-0-0",
                "url": "https://test-media.jupiter.bbc.co.uk/zgbwcjvsfsqaw1-00.jupiter/qaw1_webmedia/2019_09_02/360052/360052_1_46890.wav",
                "videoTracks": []
              }
            ],
            "renditions": [
              {
                "id": 996381,
                "audioTracks": [],
                "schemaVersion": "1-0-0",
                "url": "https://test-media.jupiter.bbc.co.uk/zgbwcjvsfsqaw1-00.jupiter/qaw1_shelf/2019_09_02/jex/qa64w1.88457.mxf",
                "videoTracks": []
              },
              {
                "id": 996382,
                "audioTracks": [],
                "schemaVersion": "1-0-0",
                "url": "46890",
                "videoTracks": []
              }
            ],
            "category": "FImport",
            "creationDate": "2019-09-02T16:12:16.000Z",
            "creator": "system",
            "crew": [],
            "description": "**\n** SNTV Clip - For BBC News use until Mon, 16 Sep 2019. Clearance must be sought after this date from SNTV. Other restrictions may also be present in the dope sheet.\n**\nTitle: FILE: Italian defender Matteo Darmian joins Parma from Manchester Utd\nSource: SNTV\nStory Number: 5195995\nDataLine: Various - File\n\nDope sheet now stored, and auto-updated, in the Agency Description field.\n\nInitial ingest 2019-09-02 17:12:16\n",
            "details": "Soccer Darmian",
            "eventDate": "2019-09-02T16:12:16.000Z",
            "externalDescription": "\n\n**\n** SNTV Clip - For BBC News use until Mon, 16 Sep 2019. Clearance must be sought after this date from SNTV. Other restrictions may also be present in the dope sheet.\n**\nTitle: FILE: Italian defender Matteo Darmian joins Parma from Manchester Utd\nSource: SNTV\nStory Number: 5195995\nDataLine: Various - File\n\n\nRESTRICTIONS: SNTV clients only. Use on broadcast and digital channels, including social. Available worldwide. Use within 14 days. All usage subject to rights licensed in contract. For any questions regarding rights restrictions please contact planning@sntv.com.\nSHOTLIST: File. Various.\nManchester, England, UK - 25th January, 2016.\n1. 00:00 Matteo Darmian training with Manchester United\n2. 00:06 Manager Louis van Gaal watching Manchester United training session\n3. 00:09 Darmian training with Manchester United\nSeattle, Washington, USA - 15th July, 2015.\n4. 00:16 Pan from Morgan Schneiderlin and Bastien Schweinsteiger to Darmian at Manchester United presentation\n5. 00:19 Mid of Darmian at Manchester United presentation\nSOURCE: SNTV\nDURATION: 00:22\nSTORYLINE:\nMatteo Darmian moved from Manchester United to Serie A side Parma on a four-year deal on Monday.\nThe 29-year-old Italian defender was brought to Old Trafford from Torino by former boss Louis van Gaal in July 2015.\nDarmian, whose United contract was due to expire in 2020, made 92 appearances for the \"Red Devils\" (Manchester United nickname), of which only seven came last season.\n\n\n",
            "frameRate": {
              "denominator": 1,
              "numerator": 25
            },
            "isAgency": true,
            "isBestMedia": false,
            "lengthFrames": 757,
            "modifiedDate": "2019-09-02T16:12:16.000Z",
            "outlet": "News",
            "pictureFormat": "16x9",
            "rights": {
              "copyright": "SNTV",
              "trafficLight": "AMBER",
              "restrictions": "No restrictions"
            },
            "schemaVersion": "1-0-0",
            "source": "aptn",
            "status": "Raw",
            "story": "sntv",
            "type": "Original",
            "identifier": {
              "id": 360052,
              "siteId": 10
            },
            "clipName": "sntv/soccer darmian/1712/2/9",
            "deletionDate": "2019-09-16T16:12:26.000Z",
            "displayRights": {
              "restrictions": [
                "No restrictions"
              ],
              "trafficLight": "AMBER"
            },
            "isDeleted": false,
            "isOffline": false,
            "isOnline": true,
            "isOnShelf": false,
            "isRecording": false,
            "jupId": "10.360052",
            "lengthMillis": 30280,
            "parts": [
              {
                "creationDate": "2019-09-02T16:13:39.000Z",
                "creator": "system",
                "partDetails": {
                  "keyframe": {
                    "url": "https://test-media.jupiter.bbc.co.uk/zgbwcjvkfsqaw1-00.jupiter/qaw1_keyframes/2019_09_02/360052/00000000.jpg"
                  },
                  "schemaVersion": "1-0-0"
                },
                "schemaVersion": "1-0-0",
                "startFrame": 0
              },
              {
                "creationDate": "2019-09-02T16:13:14.000Z",
                "creator": "system",
                "partDetails": {
                  "keyframe": {
                    "url": "https://test-media.jupiter.bbc.co.uk/zgbwcjvkfsqaw1-00.jupiter/qaw1_keyframes/2019_09_02/360052/00000624.jpg"
                  },
                  "schemaVersion": "1-0-0"
                },
                "schemaVersion": "1-0-0",
                "startFrame": 174
              },
              {
                "creationDate": "2019-09-02T16:13:14.000Z",
                "creator": "system",
                "partDetails": {
                  "keyframe": {
                    "url": "https://test-media.jupiter.bbc.co.uk/zgbwcjvkfsqaw1-00.jupiter/qaw1_keyframes/2019_09_02/360052/00001400.jpg"
                  },
                  "schemaVersion": "1-0-0"
                },
                "schemaVersion": "1-0-0",
                "startFrame": 350
              },
              {
                "creationDate": "2019-09-02T16:13:28.000Z",
                "creator": "system",
                "partDetails": {
                  "keyframe": {
                    "url": "https://test-media.jupiter.bbc.co.uk/zgbwcjvkfsqaw1-00.jupiter/qaw1_keyframes/2019_09_02/360052/00001709.jpg"
                  },
                  "schemaVersion": "1-0-0"
                },
                "schemaVersion": "1-0-0",
                "startFrame": 434
              },
              {
                "creationDate": "2019-09-02T16:13:28.000Z",
                "creator": "system",
                "partDetails": {
                  "keyframe": {
                    "url": "https://test-media.jupiter.bbc.co.uk/zgbwcjvkfsqaw1-00.jupiter/qaw1_keyframes/2019_09_02/360052/00002021.jpg"
                  },
                  "schemaVersion": "1-0-0"
                },
                "schemaVersion": "1-0-0",
                "startFrame": 521
              },
              {
                "creationDate": "2019-09-02T16:13:28.000Z",
                "creator": "system",
                "partDetails": {
                  "keyframe": {
                    "url": "https://test-media.jupiter.bbc.co.uk/zgbwcjvkfsqaw1-00.jupiter/qaw1_keyframes/2019_09_02/360052/00002324.jpg"
                  },
                  "schemaVersion": "1-0-0"
                },
                "schemaVersion": "1-0-0",
                "startFrame": 599
              },
              {
                "creationDate": "2019-09-02T16:13:28.000Z",
                "creator": "system",
                "partDetails": {
                  "keyframe": {
                    "url": "https://test-media.jupiter.bbc.co.uk/zgbwcjvkfsqaw1-00.jupiter/qaw1_keyframes/2019_09_02/360052/00002721.jpg"
                  },
                  "schemaVersion": "1-0-0"
                },
                "schemaVersion": "1-0-0",
                "startFrame": 696
              },
              {
                "creationDate": "2019-09-02T16:13:39.000Z",
                "creator": "system",
                "partDetails": {
                  "keyframe": {
                    "url": "https://test-media.jupiter.bbc.co.uk/zgbwcjvkfsqaw1-00.jupiter/qaw1_keyframes/2019_09_02/360052/00003006.jpg"
                  },
                  "schemaVersion": "1-0-0"
                },
                "schemaVersion": "1-0-0",
                "startFrame": 756
              },
              {
                "partDetails": {
                  "rights": {
                    "copyright": "SNTV",
                    "trafficLight": "AMBER",
                    "restrictions": "No restrictions"
                  },
                  "schemaVersion": "1-0-0"
                },
                "endFrame": 757,
                "schemaVersion": "1-0-0",
                "startFrame": 0
              }
            ],
            "siteName": "QA64 W1",
            "summaryRights": {
              "copyrights": [
                "SNTV"
              ],
              "restrictions": [
                "No restrictions"
              ],
              "trafficLight": "AMBER"
            }
          };

        options['url'] = baseURL + endPointUnderTest;
        request.get(options, 
            function(error, response, body){
                    console.log("response = " + response.statusCode + "\nerror = " + error + "\nbody = " + body);
                    expect(response.statusCode).to.equal(200);
                    expect(body).to.be.jsonSchema(itemFoundSchema);
                    done();
            });   
    });

    it("returns 404 with appropriate message, if the siteID is correct, BUT mediaItemID is not", function(done){
        var siteUnderTest = 10;
        var itemUnderTest = 3600524;
        var endPointUnderTest = mediaItemAPI + '/site/' + siteUnderTest + '/item/' + itemUnderTest;

        var itemNotFoundSchema = {
            "timestamp": "2019-09-06T16:54:05.827+0000",
            "status": 404,
            "error": "Not Found",
            "message": "Mediaitem not found for siteId: 10, itemId: 3600535",
            "path": "/mediaitem/site/10/item/3600534"
        };
        options['url'] = baseURL + endPointUnderTest;
        request.get(options, 
            function(error, response, body){
                    console.log("response = " + response.statusCode + "\nerror = " + error + "\nbody = " + body);
                    expect(response.statusCode).to.equal(404);
                    expect(body).to.be.jsonSchema(itemNotFoundSchema);
                    done();
            });   
    });
});