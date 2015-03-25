/**
 * Created by admin on 3/22/2015.
 */
let model = {};

Object.observe(model, function (changes) {
    changes.forEach(function (change) {
        //console.log(change);
    });
});

model.a = 'what\'s up!';

setTimeout(() => {model.a = "nothing"; model.b = 15},3000);


