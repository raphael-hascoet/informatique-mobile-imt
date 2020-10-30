import 'package:convertisseur_devises/models/devise.dart';
import 'package:flutter/material.dart';

class DeviseDropdownButton extends StatefulWidget {
  Devise dropdownValue;
  Function onChange;

  DeviseDropdownButton({this.dropdownValue, this.onChange});
  @override
  State<StatefulWidget> createState() {
    return _DeviseDropdownButton();
  }
}

class _DeviseDropdownButton extends State<DeviseDropdownButton> {
  @override
  Widget build(BuildContext context) {
    return DropdownButton(
        value: widget.dropdownValue,
        isExpanded: true,
        onChanged: widget.onChange,
        items: Devise.values
            .map((devise) => DropdownMenuItem<Devise>(
                  value: devise,
                  child: Text(devise.libelle),
                ))
            .toList());
  }
}
