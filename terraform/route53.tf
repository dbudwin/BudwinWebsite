resource "aws_route53_zone" "main" {
  name = var.domain_name
}

###########################################
# A Records
###########################################
resource "aws_route53_record" "root-a" {
  zone_id = aws_route53_zone.main.zone_id
  name    = var.domain_name
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.root_s3_distribution.domain_name
    zone_id                = aws_cloudfront_distribution.root_s3_distribution.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "www-a" {
  zone_id = aws_route53_zone.main.zone_id
  name    = "www.${var.domain_name}"
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.www_s3_distribution.domain_name
    zone_id                = aws_cloudfront_distribution.www_s3_distribution.hosted_zone_id
    evaluate_target_health = false
  }
}

###########################################
# MX Records
###########################################
locals {
  google_mx_record_set = {
    "${var.domain_name}" = {
      type = "MX",
      ttl  = 14400,
      mx_records =  [{
          "value" = "1 aspmx.l.google.com."
        }, {
          "value" = "5 alt1.aspmx.l.google.com."
        }, {
          "value" = "5 alt2.aspmx.l.google.com."
        }, {
          "value" = "10 alt3.aspmx.l.google.com."
        }, {
          "value" = "10 alt4.aspmx.l.google.com."
        }
      ]
    }
  }
}

resource "aws_route53_record" "mx_records" {
  for_each = local.google_mx_record_set

  zone_id  = aws_route53_zone.main.zone_id
  name     = each.key
  type     = each.value.type
  records  = [for key, record in each.value["mx_records"]: record["value"]]
  ttl      = each.value.ttl
}
