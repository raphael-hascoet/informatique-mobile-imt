import 'package:flutter/material.dart';

String photoUrl =
    "https://vignette.wikia.nocookie.net/babar/images/2/28/1--S78iSFaDtxqWvqj_4NM6w.jpeg/revision/latest/top-crop/width/720/height/900?cb=20190606040339";
void main() => runApp(MonApplication());

class MonApplication extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
          appBar: AppBar(
            title: Text('Bonjour App'),
            backgroundColor: Color(0xFFB74093),
          ),
          body: SingleChildScrollView(
              child: Center(
                  child: Column(children: [
            Text(
              'Bonjour',
              style: TextStyle(
                  fontSize: 40,
                  fontWeight: FontWeight.bold,
                  color: Color(0xFFB74093)),
            ),
            Text('Je suis Raphael',
                style: TextStyle(
                  color: Color(0xFFB74093),
                )),
            Image.network(
              photoUrl,
              height: 350,
            ),
            BoutonContactezMoi()
          ])))),
    );
  }
}

class BoutonContactezMoi extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      child: Text("Contactez-moi !"),
      style: ButtonStyle(
          backgroundColor: MaterialStateProperty.all<Color>(Color(0xFFB74093))),
      onPressed: () => showDialog(
          context: context,
          builder: (BuildContext context) {
            return AlertDialog(
              title: Text('Contactez-moi'),
              content: Text('Je suis joignable à l\'IMT Atlantique'),
            );
          }),
    );
  }
}
