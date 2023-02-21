# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-spotinst.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpotinstProvider <a name="SpotinstProvider" id="@cdktf/provider-spotinst.provider.SpotinstProvider"></a>

Represents a {@link https://www.terraform.io/docs/providers/spotinst spotinst}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.provider.SpotinstProvider.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/provider"

provider.NewSpotinstProvider(scope Construct, id *string, config SpotinstProviderConfig) SpotinstProvider
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProviderConfig">SpotinstProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.provider.SpotinstProvider.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.provider.SpotinstProvider.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-spotinst.provider.SpotinstProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.provider.SpotinstProviderConfig">SpotinstProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.resetAccount">ResetAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.resetFeatureFlags">ResetFeatureFlags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.resetToken">ResetToken</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.provider.SpotinstProvider.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-spotinst.provider.SpotinstProvider.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.provider.SpotinstProvider.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.provider.SpotinstProvider.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-spotinst.provider.SpotinstProvider.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-spotinst.provider.SpotinstProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-spotinst.provider.SpotinstProvider.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-spotinst.provider.SpotinstProvider.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-spotinst.provider.SpotinstProvider.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ResetAccount` <a name="ResetAccount" id="@cdktf/provider-spotinst.provider.SpotinstProvider.resetAccount"></a>

```go
func ResetAccount()
```

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-spotinst.provider.SpotinstProvider.resetAlias"></a>

```go
func ResetAlias()
```

##### `ResetFeatureFlags` <a name="ResetFeatureFlags" id="@cdktf/provider-spotinst.provider.SpotinstProvider.resetFeatureFlags"></a>

```go
func ResetFeatureFlags()
```

##### `ResetToken` <a name="ResetToken" id="@cdktf/provider-spotinst.provider.SpotinstProvider.resetToken"></a>

```go
func ResetToken()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-spotinst.provider.SpotinstProvider.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/provider"

provider.SpotinstProvider_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.provider.SpotinstProvider.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-spotinst.provider.SpotinstProvider.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/provider"

provider.SpotinstProvider_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.provider.SpotinstProvider.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktf/provider-spotinst.provider.SpotinstProvider.isTerraformProvider"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/provider"

provider.SpotinstProvider_IsTerraformProvider(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.provider.SpotinstProvider.isTerraformProvider.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.property.metaAttributes">MetaAttributes</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.property.accountInput">AccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.property.aliasInput">AliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.property.featureFlagsInput">FeatureFlagsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.property.tokenInput">TokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.property.account">Account</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.property.featureFlags">FeatureFlags</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.property.token">Token</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-spotinst.provider.SpotinstProvider.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-spotinst.provider.SpotinstProvider.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.provider.SpotinstProvider.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-spotinst.provider.SpotinstProvider.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktf/provider-spotinst.provider.SpotinstProvider.property.metaAttributes"></a>

```go
func MetaAttributes() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-spotinst.provider.SpotinstProvider.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-spotinst.provider.SpotinstProvider.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktf/provider-spotinst.provider.SpotinstProvider.property.terraformProviderSource"></a>

```go
func TerraformProviderSource() *string
```

- *Type:* *string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-spotinst.provider.SpotinstProvider.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `AccountInput`<sup>Optional</sup> <a name="AccountInput" id="@cdktf/provider-spotinst.provider.SpotinstProvider.property.accountInput"></a>

```go
func AccountInput() *string
```

- *Type:* *string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-spotinst.provider.SpotinstProvider.property.aliasInput"></a>

```go
func AliasInput() *string
```

- *Type:* *string

---

##### `FeatureFlagsInput`<sup>Optional</sup> <a name="FeatureFlagsInput" id="@cdktf/provider-spotinst.provider.SpotinstProvider.property.featureFlagsInput"></a>

```go
func FeatureFlagsInput() *string
```

- *Type:* *string

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktf/provider-spotinst.provider.SpotinstProvider.property.tokenInput"></a>

```go
func TokenInput() *string
```

- *Type:* *string

---

##### `Account`<sup>Optional</sup> <a name="Account" id="@cdktf/provider-spotinst.provider.SpotinstProvider.property.account"></a>

```go
func Account() *string
```

- *Type:* *string

---

##### `FeatureFlags`<sup>Optional</sup> <a name="FeatureFlags" id="@cdktf/provider-spotinst.provider.SpotinstProvider.property.featureFlags"></a>

```go
func FeatureFlags() *string
```

- *Type:* *string

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-spotinst.provider.SpotinstProvider.property.token"></a>

```go
func Token() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-spotinst.provider.SpotinstProvider.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SpotinstProviderConfig <a name="SpotinstProviderConfig" id="@cdktf/provider-spotinst.provider.SpotinstProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.provider.SpotinstProviderConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/provider"

&provider.SpotinstProviderConfig {
	Account: *string,
	Alias: *string,
	FeatureFlags: *string,
	Token: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProviderConfig.property.account">Account</a></code> | <code>*string</code> | Spotinst Account ID. |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProviderConfig.property.alias">Alias</a></code> | <code>*string</code> | Alias name. |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProviderConfig.property.featureFlags">FeatureFlags</a></code> | <code>*string</code> | Spotinst SDK Feature Flags. |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProviderConfig.property.token">Token</a></code> | <code>*string</code> | Spotinst Personal API Access Token. |

---

##### `Account`<sup>Optional</sup> <a name="Account" id="@cdktf/provider-spotinst.provider.SpotinstProviderConfig.property.account"></a>

```go
Account *string
```

- *Type:* *string

Spotinst Account ID.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst#account SpotinstProvider#account}

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-spotinst.provider.SpotinstProviderConfig.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

Alias name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst#alias SpotinstProvider#alias}

---

##### `FeatureFlags`<sup>Optional</sup> <a name="FeatureFlags" id="@cdktf/provider-spotinst.provider.SpotinstProviderConfig.property.featureFlags"></a>

```go
FeatureFlags *string
```

- *Type:* *string

Spotinst SDK Feature Flags.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst#feature_flags SpotinstProvider#feature_flags}

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-spotinst.provider.SpotinstProviderConfig.property.token"></a>

```go
Token *string
```

- *Type:* *string

Spotinst Personal API Access Token.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst#token SpotinstProvider#token}

---


