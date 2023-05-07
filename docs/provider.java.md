# `provider`

Refer to the Terraform Registory for docs: [`spotinst`](https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs).

# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-spotinst.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpotinstProvider <a name="SpotinstProvider" id="@cdktf/provider-spotinst.provider.SpotinstProvider"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs spotinst}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.provider.SpotinstProvider.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.provider.SpotinstProvider;

SpotinstProvider.Builder.create(Construct scope, java.lang.String id)
//  .account(java.lang.String)
//  .alias(java.lang.String)
//  .featureFlags(java.lang.String)
//  .token(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.Initializer.parameter.account">account</a></code> | <code>java.lang.String</code> | Spotinst Account ID. |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.Initializer.parameter.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.Initializer.parameter.featureFlags">featureFlags</a></code> | <code>java.lang.String</code> | Spotinst SDK Feature Flags. |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.Initializer.parameter.token">token</a></code> | <code>java.lang.String</code> | Spotinst Personal API Access Token. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.provider.SpotinstProvider.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.provider.SpotinstProvider.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdktf/provider-spotinst.provider.SpotinstProvider.Initializer.parameter.account"></a>

- *Type:* java.lang.String

Spotinst Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs#account SpotinstProvider#account}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-spotinst.provider.SpotinstProvider.Initializer.parameter.alias"></a>

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs#alias SpotinstProvider#alias}

---

##### `featureFlags`<sup>Optional</sup> <a name="featureFlags" id="@cdktf/provider-spotinst.provider.SpotinstProvider.Initializer.parameter.featureFlags"></a>

- *Type:* java.lang.String

Spotinst SDK Feature Flags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs#feature_flags SpotinstProvider#feature_flags}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-spotinst.provider.SpotinstProvider.Initializer.parameter.token"></a>

- *Type:* java.lang.String

Spotinst Personal API Access Token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs#token SpotinstProvider#token}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.resetAccount">resetAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.resetFeatureFlags">resetFeatureFlags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.resetToken">resetToken</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.provider.SpotinstProvider.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-spotinst.provider.SpotinstProvider.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.provider.SpotinstProvider.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.provider.SpotinstProvider.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-spotinst.provider.SpotinstProvider.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-spotinst.provider.SpotinstProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-spotinst.provider.SpotinstProvider.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-spotinst.provider.SpotinstProvider.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-spotinst.provider.SpotinstProvider.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `resetAccount` <a name="resetAccount" id="@cdktf/provider-spotinst.provider.SpotinstProvider.resetAccount"></a>

```java
public void resetAccount()
```

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-spotinst.provider.SpotinstProvider.resetAlias"></a>

```java
public void resetAlias()
```

##### `resetFeatureFlags` <a name="resetFeatureFlags" id="@cdktf/provider-spotinst.provider.SpotinstProvider.resetFeatureFlags"></a>

```java
public void resetFeatureFlags()
```

##### `resetToken` <a name="resetToken" id="@cdktf/provider-spotinst.provider.SpotinstProvider.resetToken"></a>

```java
public void resetToken()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-spotinst.provider.SpotinstProvider.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.provider.SpotinstProvider;

SpotinstProvider.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-spotinst.provider.SpotinstProvider.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.provider.SpotinstProvider;

SpotinstProvider.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.provider.SpotinstProvider.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktf/provider-spotinst.provider.SpotinstProvider.isTerraformProvider"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.provider.SpotinstProvider;

SpotinstProvider.isTerraformProvider(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.provider.SpotinstProvider.isTerraformProvider.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.property.metaAttributes">metaAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.property.accountInput">accountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.property.aliasInput">aliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.property.featureFlagsInput">featureFlagsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.property.tokenInput">tokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.property.account">account</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.property.featureFlags">featureFlags</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.property.token">token</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-spotinst.provider.SpotinstProvider.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-spotinst.provider.SpotinstProvider.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.provider.SpotinstProvider.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-spotinst.provider.SpotinstProvider.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktf/provider-spotinst.provider.SpotinstProvider.property.metaAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getMetaAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-spotinst.provider.SpotinstProvider.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-spotinst.provider.SpotinstProvider.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktf/provider-spotinst.provider.SpotinstProvider.property.terraformProviderSource"></a>

```java
public java.lang.String getTerraformProviderSource();
```

- *Type:* java.lang.String

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-spotinst.provider.SpotinstProvider.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `accountInput`<sup>Optional</sup> <a name="accountInput" id="@cdktf/provider-spotinst.provider.SpotinstProvider.property.accountInput"></a>

```java
public java.lang.String getAccountInput();
```

- *Type:* java.lang.String

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-spotinst.provider.SpotinstProvider.property.aliasInput"></a>

```java
public java.lang.String getAliasInput();
```

- *Type:* java.lang.String

---

##### `featureFlagsInput`<sup>Optional</sup> <a name="featureFlagsInput" id="@cdktf/provider-spotinst.provider.SpotinstProvider.property.featureFlagsInput"></a>

```java
public java.lang.String getFeatureFlagsInput();
```

- *Type:* java.lang.String

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktf/provider-spotinst.provider.SpotinstProvider.property.tokenInput"></a>

```java
public java.lang.String getTokenInput();
```

- *Type:* java.lang.String

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdktf/provider-spotinst.provider.SpotinstProvider.property.account"></a>

```java
public java.lang.String getAccount();
```

- *Type:* java.lang.String

---

##### `featureFlags`<sup>Optional</sup> <a name="featureFlags" id="@cdktf/provider-spotinst.provider.SpotinstProvider.property.featureFlags"></a>

```java
public java.lang.String getFeatureFlags();
```

- *Type:* java.lang.String

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-spotinst.provider.SpotinstProvider.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-spotinst.provider.SpotinstProvider.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SpotinstProviderConfig <a name="SpotinstProviderConfig" id="@cdktf/provider-spotinst.provider.SpotinstProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.provider.SpotinstProviderConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.provider.SpotinstProviderConfig;

SpotinstProviderConfig.builder()
//  .account(java.lang.String)
//  .alias(java.lang.String)
//  .featureFlags(java.lang.String)
//  .token(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProviderConfig.property.account">account</a></code> | <code>java.lang.String</code> | Spotinst Account ID. |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProviderConfig.property.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProviderConfig.property.featureFlags">featureFlags</a></code> | <code>java.lang.String</code> | Spotinst SDK Feature Flags. |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProviderConfig.property.token">token</a></code> | <code>java.lang.String</code> | Spotinst Personal API Access Token. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdktf/provider-spotinst.provider.SpotinstProviderConfig.property.account"></a>

```java
public java.lang.String getAccount();
```

- *Type:* java.lang.String

Spotinst Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs#account SpotinstProvider#account}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-spotinst.provider.SpotinstProviderConfig.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs#alias SpotinstProvider#alias}

---

##### `featureFlags`<sup>Optional</sup> <a name="featureFlags" id="@cdktf/provider-spotinst.provider.SpotinstProviderConfig.property.featureFlags"></a>

```java
public java.lang.String getFeatureFlags();
```

- *Type:* java.lang.String

Spotinst SDK Feature Flags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs#feature_flags SpotinstProvider#feature_flags}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-spotinst.provider.SpotinstProviderConfig.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

Spotinst Personal API Access Token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs#token SpotinstProvider#token}

---



