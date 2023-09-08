import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:flutter_demo/constants/error_handling.dart';
import 'package:flutter_demo/constants/global_variables.dart';
import 'package:flutter_demo/constants/utils.dart';
import 'package:flutter_demo/models/product.dart';
import 'package:flutter_demo/providers/user_provider.dart';
import 'package:provider/provider.dart';
import "package:http/http.dart" as http;

class SearchServices {
  Future<List<Product>> fetchSearchedProduct({
    required BuildContext context,
    required String searchQuery,
  }) async {
    final userProvider = Provider.of<UserProvider>(context, listen: false);
    List<Product> productList = [];
    try {
      print(searchQuery);
      http.Response res = await http
          .get(Uri.parse('$uri/api/products/search/$searchQuery'), headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        'x-auth-token': userProvider.user.token,
      });

      // ignore: use_build_context_synchronously
      httpErrorHandling(
        response: res,
        context: context,
        onSuccess: () {
          for (int i = 0; i < jsonDecode(res.body).length; i++) {
            productList.add(
              Product.fromJson(
                jsonEncode(
                  jsonDecode(res.body)[i],
                ),
              ),
            );
          }
        },
      );
    } catch (e) {
      // ignore: use_build_context_synchronously
      showSnackBar(context, e.toString());
    }
    return productList;
  }
}
