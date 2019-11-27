terraform {
  backend s3 {
    region                  = "eu-west-2"
    bucket                  = "thecodesmithy-terraform-state-store"
    key                     = "thecodesmithy.web.tfstate"
  }
}