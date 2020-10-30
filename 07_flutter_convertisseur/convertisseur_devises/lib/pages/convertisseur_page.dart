import 'dart:io';

import 'package:convertisseur_devises/models/devise.dart';
import 'package:convertisseur_devises/styles.dart';
import 'package:convertisseur_devises/widgets/liste_devises.dart';
import 'package:convertisseur_devises/widgets/saisie_nombres.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

class ConvertisseurDevisePage extends StatefulWidget {
  ConvertisseurDevisePage();
  @override
  State<StatefulWidget> createState() {
    return _ConvertisseurDevisePage();
  }
}

class _ConvertisseurDevisePage extends State<ConvertisseurDevisePage> {
  // les différents "états" de la page
  double _valeur; // valeur saisie
  Devise _deviseInitial = Devise.EURO; // devise initiale sélectionnée
  Devise _deviseFinale = Devise.DOLLAR; // devise finale sélectionnée
  double _resultat; // le résultat de la conversion
  // définition des valeurs initiales
  @override
  void initState() {
    super.initState();
    _valeur = 0;
    _resultat = 0;
  }

  @override
  Widget build(BuildContext context) {
    return Center(
        child: Column(
      children: [
        Spacer(),
        Text(
          'Valeur',
          style: AppStyle.labelStyle,
        ),
        Spacer(),
        DeviseInput(onChange: (newValue) {
          print(newValue);
          setState(() {
            _valeur = newValue;
            print(_valeur);
          });
        }),
        Spacer(),
        Text(
          'De',
          style: AppStyle.labelStyle,
        ),
        Spacer(),
        DeviseDropdownButton(
            dropdownValue: _deviseInitial,
            onChange: (newDevise) {
              setState(() {
                _deviseInitial = newDevise;
              });
            }),
        Spacer(),
        Text('Vers', style: AppStyle.labelStyle),
        Spacer(),
        DeviseDropdownButton(
            dropdownValue: _deviseFinale,
            onChange: (newDevise) {
              setState(() {
                _deviseFinale = newDevise;
              });
            }),
        Spacer(
          flex: 2,
        ),
        ElevatedButton(
            onPressed: () {
              print(_valeur);
              setState(() {
                _resultat = _valeur * _deviseFinale.taux / _deviseInitial.taux;
              });
            },
            child: Text('Convertir')),
        Spacer(
          flex: 2,
        ),
        Text(_resultat.toString(), style: AppStyle.labelStyle),
        Spacer(),
      ],
    ));
  }
}
