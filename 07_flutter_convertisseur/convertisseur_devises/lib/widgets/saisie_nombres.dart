import 'package:convertisseur_devises/models/devise.dart';
import 'package:convertisseur_devises/styles.dart';
import 'package:flutter/material.dart';

class DeviseInput extends StatefulWidget {
  Function onChange;

  DeviseInput({this.onChange});
  @override
  State<StatefulWidget> createState() {
    return _DeviseInput();
  }
}

class _DeviseInput extends State<DeviseInput> {
  @override
  Widget build(BuildContext context) {
    return TextField(
        style: AppStyle.inputStyle,
        keyboardType: TextInputType.number,
        onChanged: (saisie) {
          widget.onChange(double.parse(saisie));
        });
  }
}
