def required():
    return lambda value: 'Debes llenar este campo.' if value == '' else False

def validate(validations, data):
    """Revisa la instancia del modelo en busca de errores en base a las
    validaciones especificadas en éste.
    """

    errors = {}

    for field, field_validations in validations.items():
        for validation in field_validations:
            if not field in data:
                errors.update({field: 'Debes llenar este campo.'})
                break

            error = validation(data[field])

            if error:
                errors.update({field: error})
                break

    return errors